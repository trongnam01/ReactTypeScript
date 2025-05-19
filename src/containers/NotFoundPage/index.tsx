// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from "react";
import { Button } from "antd";
import { HomeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { PUBLIC_PATH } from "@/utils/constants";


const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-4">
                <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md h-80 flex items-center justify-center bg-blue-100 rounded-lg shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-50"></div>
                            <div className="relative text-center">
                                <i className="fas fa-rocket text-8xl text-blue-500 mb-4 transform -rotate-45"></i>
                                <div className="mt-4">
                                    <i
                                        className="fas fa-star text-yellow-400 text-xl absolute"
                                        style={{ top: "-40px", left: "20px" }}
                                    ></i>
                                    <i
                                        className="fas fa-star text-yellow-400 text-sm absolute"
                                        style={{ top: "-20px", right: "30px" }}
                                    ></i>
                                    <i
                                        className="fas fa-star text-yellow-400 text-lg absolute"
                                        style={{ bottom: "-30px", left: "40px" }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="relative">
                            <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
                            <div className="absolute -top-6 right-4 transform rotate-12">
                                <i className="fas fa-question-circle text-4xl text-blue-300"></i>
                            </div>
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Không tìm thấy trang
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di
                            chuyển.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                type="primary"
                                size="large"
                                icon={<HomeOutlined />}
                                className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 h-12 px-8 flex items-center justify-center"
                            >
                                <a
                                    href={`${PUBLIC_PATH || ''}/`}
                                >
                                    <span className="ml-2">Về trang chủ</span>
                                </a>
                            </Button>
                            {/* <Button
                            size="large"
                            icon={<QuestionCircleOutlined />}
                            className="!rounded-button whitespace-nowrap cursor-pointer border-gray-300 hover:border-blue-500 hover:text-blue-500 h-12 px-8 flex items-center justify-center"
                        >
                            <span className="ml-2 text-base">Liên hệ hỗ trợ</span>
                        </Button> */}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 w-full text-center text-gray-500">
                    {/* <p>© 2025. Tất cả các quyền được bảo lưu.</p> */}
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
