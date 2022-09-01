function solution(sizes) {
    let maxInfo = {w:0, h:0, size: 0};
    for(let i = 0; i < sizes.length; i++) {
        const [curW, curH] = sizes[i];
        const boxInfo = {w: Math.max(curW, maxInfo.w), h: Math.max(curH, maxInfo.h)};
        const switchedBoxInfo = {w: Math.max(curH, maxInfo.w), h: Math.max(curW, maxInfo.h)};
        boxInfo.size = boxInfo.w * boxInfo.h;
        switchedBoxInfo.size = switchedBoxInfo.w * switchedBoxInfo.h;
        maxInfo = boxInfo.size < switchedBoxInfo.size ? boxInfo : switchedBoxInfo;
    }
    return maxInfo.size;
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]]);