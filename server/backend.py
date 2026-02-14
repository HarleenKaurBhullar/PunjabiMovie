from flask import Flask,jsonify
import pandas as pd
import joblib
from flask_cors import CORS
import numpy as np
from recommender import recommend
from flask import Flask, jsonify, request
app = Flask(__name__)
CORS(app)  # Allow all origins for dev


df = joblib.load("./Data/mvdata_f.pkl")


# Replace NaN with defaults
df['poster'] = df['poster'].fillna("https://picsum.photos/400/600")   # default image
df['imdb_rating'] = df['imdb_rating'].fillna(0)                        # default rating
df['overview'] = df['overview'].fillna("No description available")     # default description

# Optional: if any other column can be NaN, replace all remaining NaN with None
df = df.where(pd.notnull(df), None)
def clean_df(df):
    return df.replace({np.nan: None})

fieldmap={
    'poster':'image',
    'imdb_rating':'rating',
    'overview':'description',
}

top_movies=df.sort_values(by='imdb_rating',ascending=False)
top_40=top_movies.head(40)

top_40_json=top_40.rename(columns=fieldmap).to_dict(orient='records')

@app.route('/top40movies',methods=['GET'])
def get_top_40():
    return jsonify(top_40_json)

latest_movies=df.sort_values(by='release_date',ascending=False)
latest_movies=latest_movies[latest_movies['imdb_rating']>8.0]
latest_movies=latest_movies.head(6)
latest_movies_json=latest_movies.rename(columns=fieldmap).to_dict(orient='records')
@app.route('/latesthigh',methods=['GET'])
def get_latest_top():
    return jsonify(latest_movies_json)


@app.route('/genre_name/<genre_name>', methods=['GET'])
def getmoviebygenre(genre_name):
    genre_movies = df[df['genre'].apply(lambda x: genre_name in x)]
    genre_movies = genre_movies.sort_values(by='imdb_rating', ascending=False)
    genre_movies_json = genre_movies.rename(columns=fieldmap).to_dict(orient='records')
    print(f"Found {len(genre_movies_json)} movies for {genre_name}")
    return jsonify(genre_movies_json)

@app.route("/movie/<id>")
@app.route("/movie/<int:id>")
def moviefromid(id):
    moviedetail = df[df['id'] == id]

    if moviedetail.empty:
        return jsonify({"error": "Movie not found"}), 404

    movie_json = moviedetail.rename(columns=fieldmap).iloc[0].to_dict()
    return jsonify(movie_json)

@app.route("/recmovie/<int:id>")
def get_recommendations(id):
    rowdf = df[df['id'] == id]

    if rowdf.empty:
        return jsonify({"error": "Movie not found"}), 404

    title = rowdf.iloc[0]['title']   # ✅ string
    print(title)
    recs = recommend(title)

    recs = recs.rename(columns=fieldmap)
    recs=clean_df(recs)
    return jsonify(recs.to_dict(orient="records"))


@app.route("/search")
def search_movies():
    query = request.args.get("query", "").lower()

    results = df[
        df["title"].str.lower().str.contains(query, na=False)|df["cast"].astype(str).str.lower().str.contains(query, na=False)
    ]
    results=results.rename(columns=fieldmap)
    results=clean_df(results)

    return jsonify(results.to_dict(orient="records"))





if __name__ == "__main__":
    app.run(debug=True)
