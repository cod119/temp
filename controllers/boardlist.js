var output = {};
var db = [
    {
        id: 1,
        image: "pic01.jpg",
        receptday: "2018-07-17",
        race: "믹스",
        gender: "암컷",
        place: "올림픽공원 내 화장실 앞",
        feature: "기관지협착,유선종양있음,최근스케일링흔적,오른쪽눈실명,왼쪽눈백내장초기,양쪽슬개골탈구4기",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 2,
        image: "pic02.jpg",
        receptday: "2018-07-15",
        race: "미니어쳐 핀셔",
        gender: "암컷",
        place: "교대역",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 3,
        image: "pic03.jpg",
        receptday: "2018-07-17",
        race: "푸들",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 4,
        image: "pic04.jpg",
        receptday: "2018-07-17",
        race: "한국 고양이",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 5,
        image: "pic05.jpg",
        receptday: "2018-07-17",
        race: "믹스",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 6,
        image: "pic06.jpg",
        receptday: "2018-07-17",
        race: "믹스",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 7,
        image: "pic07.jpg",
        receptday: "2018-07-17",
        race: "믹스",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 8,
        image: "pic08.jpg",
        receptday: "2018-07-17",
        race: "믹스",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)"
    },
    {
        id: 9,
        image: "pic09.jpg",
        receptday: "2018-07-17",
        race: "믹스",
        gender: "암컷",
        place: "방배 푸르지오",
        feature: "",
        state: "보호중",
        birthNweight: "2008 / 3.9kg",
        neutralize: 0,
        juris: "서울특별시강동구",
        centername: "강동리본센터",
        centerphone: "070-4163-7350",
        centeraddress: "서울특별시 강동구 양재대로81길 73 (성내동)  강동구 유기동물 분양센터(reborn)" 
    }
]

// {
//         receptday: ,
//         race: ,
//         gender: ,
//         place: ,
//         feature: ,
//         state: 
//     }

output.list = function(page) {
    var list = db.slice(page*8 - 8, page*8);
    return list;
}
output.find = function(id) {
    var target = undefined;
    for (var i = 0; i < db.length; i++) {
        if (db[i].id == id) {
            target = db[i];
            break;
        }
    }
    return target;
}

module.exports = output;