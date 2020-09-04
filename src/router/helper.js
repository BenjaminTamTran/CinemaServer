const notFoundEmailError = (res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy email',
        data: {}
    })
};

const emailUsedError = (res) => {
    res.status(200).json({
        success: false,
        message: 'Email này đã được sử dụng',
        data: {}
    })
};

const registerSuccess = (res, token, account) => {
    return res.status(201).json({
        success: true,
        message: 'Tài khoản đăng ký thành công',
        data: {
            token: token,
            Account: account
        }
    })
};

const notExistsEmailError = (res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy tài khoản đăng nhập, email không có sẵn',
        error: 'Email không có sẵn'
    })
};

const passwordNotMatchError = (res) => {
    res.status(200).json({
        success: false,
        message: 'Đăng nhập không thành công, mật khẩu không chính xác',
        data: {}
    })
};

const loginSucess = (res, token, account) => {
    res.status(200).json({
        success: true,
        message: 'Đăng nhập tài khoản thành công',
        data: {
            token: token,
            Account: account
        }
    })
};

const unauthorizedError = (res) => {
    return res.status(403).json({
        success: false,
        message: 'Không thể tạo phim',
        error: "Cần đăng nhập để tiếp tục"
    })
};

const imageNotFoundError = (res) => {
    return res.status(400).json({
        success: false,
        message: 'Server không nhận được hình ảnh',
        data: {}
    })
};

const titleNotFoundError = (res) => {
    return res.status(400).json({
        success: false,
        message: 'Server không nhận được tiêu đề phim',
        data: {}
    })
};

const descriptionNotFoundError = (res) => {
    return res.status(400).json({
        success: false,
        message: 'Server không nhận được nội dung tóm tắt',
        data: {}
    })
};

const duplicatedMovieError = (res) => {
    return res.status(200).json({
        success: false,
        message: 'Phim này đã có sẵn',
        data: {}
    })
};

const createMovieSuccess = (res, movieCreated) => {
    return res.status(201).json({
        success: true,
        message: 'Tạo phim thành công',
        data: {
            Movie: movieCreated
        }
    })
};

const getMovieList = (res, movies) => {
    res.status(200).json({
        success: true,
        message: "Lấy danh sách thành công",
        data: movies
    })
};

const getMovieDetail = (res, item) => {
    res.status(200).json({
        success: true,
        message: "Lấy thông tin chi tiết thành công",
        data: item
    })
};

const movieNotFound = (res, error) => {
    res.status(500).json({
        success: false,
        message: "Bộ phim này không tồn tại",
        error: error
    })
};

const noMovieFoundError = (res) => {
    res.status(200).json({
        success: false,
        message: 'Không tìm thấy phim',
        data: {}
    })
};

const updateMovieSuccess = (res, movie) => {
    res.status(200).json({
        success: true,
        message: 'Cập nhật phim thành công',
        data: movie
    })
};

const removeMovieSuccess = (res) => {
    res.status(200).json({
        success: true,
        message: 'Xóa phim thành công',
        data: {}
    })
};

const serverError = (res) => {
    res.status(500).json({
        success: false,
        message: 'Server đã bị lỗi, thử lại sau',
        data: {}
    })
};

module.exports = {
    notFoundEmailError,
    emailUsedError,
    passwordNotMatchError,
    registerSuccess,
    notExistsEmailError,
    loginSucess,
    unauthorizedError,
    imageNotFoundError,
    titleNotFoundError,
    descriptionNotFoundError,
    duplicatedMovieError,
    createMovieSuccess,
    getMovieList,
    noMovieFoundError,
    getMovieDetail,
    movieNotFound,
    updateMovieSuccess,
    removeMovieSuccess,
    serverError,
};
