const notFoundEmailError = (res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy email',
        data: null
    })
};

const notFoundDataError = (res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy dữ liệu',
        data: null
    })
};

const notFoundAccountError = (res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy tài khoản',
        data: null
    })
};

const getProfileSuccessfull = (res, account) => {
    res.status(404).json({
        success: true,
        message: 'Lấy thông tin tài khoản thành công',
        data: account
    })
};

const emailUsedError = (res) => {
    res.status(200).json({
        success: false,
        message: 'Email này đã được sử dụng',
        data: null
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

const updatePersonalInfSuccess = (res, updatedInformation) => {
    return res.status(200).json({
        success: true,
        message: 'Tài khoản cập nhật thành công',
        data: updatedInformation
    })
};

const changePasswordSuccess = (res, updatedAccount) => {
    return res.status(200).json({
        success: true,
        message: 'Mật khẩu cập nhật thành công',
        data: updatedAccount
    })
};

const resetPasswordSuccess = (res, updatedAccount) => {
    return res.status(200).json({
        success: true,
        message: 'Mật khẩu reset thành công',
        data: updatedAccount
    })
};

const verifyEmailExist = (res, account) => {
    return res.status(200).json({
        success: true,
        message: 'Tài khoản có tồn tại',
        data: account
    })
};

const oldPasswordNotMatch = (res) => {
    return res.status(404).json({
        success: false,
        message: 'Mật khẩu cũ không trùng khớp',
        data: null
    })
};

const notExistsEmailError = (res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy tài khoản đăng nhập, email không tồn tại',
        data: null
    })
};

const passwordNotMatchError = (res) => {
    res.status(200).json({
        success: false,
        message: 'Đăng nhập không thành công, mật khẩu không chính xác',
        data: null
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
        message: 'Không thể thực hiện, cần đăng nhập để tiếp tục',
        data: null
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
    res.status(404).json({
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

const demandRemoveMovieSuccess = (res, id) => {
    res.status(200).json({
        success: true,
        message: 'Đã gửi yêu cầu xóa phim',
        data: {id}
    })
};

const getUserMovieListSuccess = (res, movies) => {
    res.status(200).json({
        success: true,
        message: 'Lấy danh sách phim của tài khoản thành công',
        data: movies
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
    notFoundDataError,
    notFoundAccountError,
    getProfileSuccessfull,
    emailUsedError,
    passwordNotMatchError,
    registerSuccess,
    updatePersonalInfSuccess,
    changePasswordSuccess,
    resetPasswordSuccess,
    verifyEmailExist,
    oldPasswordNotMatch,
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
    demandRemoveMovieSuccess,
    getUserMovieListSuccess,
    serverError,
};
