export const memoData = [
  {
    user_id : 1, // 디비에서 임의로 생성된 사용자의 unique id
    type : "public", // 공개 메모 : "public" or 개인 메모 : "private"
    text : "안녕하세요.", // "메모 내용"
    memo_loc : { lat : 37.668, long : 126.763 }, 
    // 메모를 작성 완료하는 순간의 디바이스 위치값에서 0.001 아래 자리 전부 버림 
  },
  {
    user_id : 1, 
    type : "public", 
    text : "저는 메시 입니다. ",
    memo_loc : { lat : 37.668, long : 126.763 }, 
  },
  {
    user_id : 2, 
    type : "public", 
    text : "안녕하십니까",
    memo_loc : { lat : 37.668, long : 126.763 }, 
  },
  {
    user_id : 2, 
    type : "public", 
    text : "저는 호날두 입니다. ",
    memo_loc : { lat : 37.668, long : 126.763 }, 
  },
  {
    user_id : 1,
    type : "private", 
    text : "안녕하세요.", 
    memo_loc : { lat : 37.668, long : 126.763 }, 
  },
  {
    user_id : 1,
    type : "private",
    text : "안녕하세요.",
    memo_loc : { lat : 37.668, long : 126.763 }, 
  },
  ];


export const ExampleUserData = 
    {
        id: 1,
        user_name: "이은상",
        user_email: "eslee850@gmail.com"
    };