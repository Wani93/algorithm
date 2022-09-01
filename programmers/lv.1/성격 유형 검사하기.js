function solution(survey, choices) {
    const computeScore = (survey, choice) => {
        // 서베이 항목 하나와 초이스 하나를 비교하여
        // 알맞는 항목과 점수를 리턴한다.
        const PIVOT_POINT = 4;

        if(PIVOT_POINT === choice) {
            return [survey[0], 0];
        }

        const personality = choice < PIVOT_POINT ? survey[0] : survey[1];

        return [
            personality, Math.abs(PIVOT_POINT - choice)
        ]
    }
    const getPersonalities = (scoreObj) => {
        // 지표 유형 배열을 돌면서
        // 총합이 더 큰 유형을 리턴한다.
        // 같으면 사전 순을 리턴한다.

        const personalityMap = [
            'RT',
            'CF',
            'JM',
            'AN'
        ]

        return personalityMap.reduce((acc, cur) => {
            const leftPersonality = cur[0];
            const rightPersonality = cur[1];
            const result = scoreObj[leftPersonality] >= scoreObj[rightPersonality] ? leftPersonality : rightPersonality;

            return acc + result;
        }, '')
    }
    const scoreObj =
        {
            R: 0,
            T: 0,
            C: 0,
            F: 0,
            J: 0,
            M: 0,
            A: 0,
            N: 0
        };

    survey.forEach((item, idx) => {
        const [personality, score] = computeScore(item, choices[idx]);
        scoreObj[personality] += score;
    })

    const answer = getPersonalities(scoreObj);
    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));