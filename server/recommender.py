import joblib

text_sim=joblib.load('./Data/text_sim_f.pkl')
mvdata=joblib.load('./Data/mvdata_f.pkl')

def recommend(movie_title, top_n=10):
    movie_title=movie_title.lower()
    idx = mvdata[mvdata["title_pre"] == movie_title].index[0]

    scores = []
    for i, sim in enumerate(text_sim[idx]):
        final_score = (
            0.7 * sim +
            0.2 * mvdata.iloc[i]["rating_norm"] +
            0.1 * mvdata.iloc[i]["year_norm"]
        )
        scores.append((i, final_score))

    scores = sorted(scores, key=lambda x: x[1], reverse=True)
    return mvdata.iloc[[i[0] for i in scores[1:top_n+1]]]
