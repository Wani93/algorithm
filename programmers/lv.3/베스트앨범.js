function solution(genres, plays) {
  return Object.entries(genres.reduce((acc, cur, idx) => {
    return {
      ...acc,
      [cur]: acc[cur] ? {
        sum: acc[cur].sum + plays[idx],
        song: [
          ...acc[cur].song,
          {
            id: idx,
            play: plays[idx],
          }
        ]
      } : {
        sum: plays[idx],
        song: [
          {
            id: idx,
            play: plays[idx],
          }
        ]
      },
    }
  }, {})).sort((a, b) => b[1].sum - a[1].sum).reduce((acc, cur) => {
    return [
      ...acc,
      ...(cur[1].song.sort((a, b) => b.play - a.play)).map((song) => song.id).slice(0, 2),
    ]
  }, []);
}

solution(["classic", "pop", "classic", "classic", "pop"],	[500, 600, 150, 800, 2500])