const colors = {
    green: "#13cf4c",
    theme: "#121212"
};

const filterList = [
    "Tất cả phim", "Ngày khởi chiếu", "Ngày tạo phim", "Lọc theo tên"
];

const mongoDBURL = {
  dev: 'mongodb://127.0.0.1:27017/'
};

const images = [
    {
        image: "https://upload.wikimedia.org/wikipedia/vi/8/8b/Blade_Runner_2049_poster.jpg",
        name: "Blade Runner",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://doanhnhanplus.vn/wp-content/uploads/2019/11/dnp-midway-tran-chien-tiep-theo-duoc-tai-hien-tren-man-anh-rong-10.jpg",
        name: "Midway",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00001609?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
        name: "Dora",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://ss-images.catscdn.vn/wp500/2019/01/10/4413847/io-movie-poster-405x600.jpg",
        name: "IO",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/55294647e4b043705b242393/1560016599207-IDKDT35O31TNR74SGQ7G/ke17ZwdGBToddI8pDm48kOBQO-2M65pGvmgyPA1OtYV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmW6PTEIPSiHkoxzSCmjHS71JVZFZwO7JUPLa0tD_734nDrb6bwXKWkfzRYqRELmPS/us-poster-jordan-peele-by-matt-talbot.jpg",
        name: "US",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        name: "Sonic",
        type: "Hoạt hình",
        date: "23/12/1997"
    },
    {
        image: "https://gamek.mediacdn.vn/2018/7/18/1-15318800764241509512963.jpg",
        name: "Aquaman",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://i.pinimg.com/736x/a5/01/46/a5014631b51ffe1c428bb0fa0e3d641d.jpg",
        name: "My Other Me",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://i.pinimg.com/736x/1c/f4/bb/1cf4bb4bf3d8d51461bfb75472e23cd1.jpg",
        name: "Stranger Thing",
        type: "Hành động",
        date: "23/12/1997"
    },
    {
        image: "https://gacinema.files.wordpress.com/2016/04/due_date_poster01.jpg?w=640",
        name: "Due Date",
        type: "Hành động",
        date: "23/12/1997"
    },
];

/**
 * Local

 */
const http = 'http://';
const https = 'https://';
const url = 'localhost:3000/';
const base_url = http + url;
const appKey = 'C1n3ma';

module.exports = {
    appKey
};
