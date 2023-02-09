export const add = (numbers) => {
    return numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

export function getData(){
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "호모사피엔스",
    },
    headers: {
        Authorization: "KakaoAK 37b97e7c16e1ed8a39ab8f1a96fc4360"
    },
})
    .done(function (msg) {
        console.log(msg);
    });
return
}