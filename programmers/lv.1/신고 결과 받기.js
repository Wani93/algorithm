const initUserReportedCnt = (id_list) => {
    return id_list.reduce((acc, cur) => {
        return {
            ...acc,
            [cur]: 0,
        }
    }, {})
}
const initReportingUser = (report) => {
    const reportingUser = {};
    const deduplicatedReport = new Set(report);
    deduplicatedReport.forEach((value) => {
        const [user, target] = value.split(' ');
        reportingUser[user] = [...reportingUser[user] ?? [], target];
    })
    return reportingUser;
}
const computeReportCnt = (report, userReportedCnt) => {
    const deduplicatedReport = new Set(report);
    deduplicatedReport.forEach((value) => {
        const [,target] = value.split(' ');
        userReportedCnt[target]++;
    })
}
const getMailCnt = (id_list, userReportedCnt, reportingUser, k) => {
    return id_list.map((id) => {
        if(!reportingUser[id]) {
            return 0;
        }
        return reportingUser[id].filter((target) => userReportedCnt[target] >= k).length;
    })
}

function solution(id_list, report, k) {
    debugger;
    const userReportedCnt = initUserReportedCnt(id_list);
    const reportingUser = initReportingUser(report);
    computeReportCnt(report, userReportedCnt);

    var answer = getMailCnt(id_list, userReportedCnt, reportingUser, k);
    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"],	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],	2)