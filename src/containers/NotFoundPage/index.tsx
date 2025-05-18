import { PUBLIC_PATH } from '@/utils/constants';
import React, { useEffect, useState } from 'react';



const TypingText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        let index = 0;
        if (displayed.length) setDisplayed('')

        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayed((prev) => {
                    let text2 = prev + text.charAt(index);
                    index = index + 1;
                    return text2
                });
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);


    return (
        <h2 className="text-3xl font-semibold whitespace-pre-wrap font-sans">{displayed}</h2>
    );
};

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 space-y-10">
            <i className="fa-solid fa-spinner fa-spin text-blue-600 text-9xl"></i>
            <h1 className="text-9xl font-extrabold text-red-600 animate-pulse">404</h1>

            {/* Text gõ chữ từng ký tự */}
            <TypingText text="Trang bạn tìm không tồn tại" speed={100} />

            <p className="max-w-md text-center text-gray-700 animate-fadeIn animation-delay-200">
                Có thể đường dẫn sai hoặc trang đã bị xóa. Vui lòng kiểm tra lại hoặc quay về trang chủ.
            </p>

            <a
                href={`${PUBLIC_PATH || ''}/`}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition animate-fadeIn animation-delay-400"
            >
                Quay về trang chủ
            </a>

            <div className="flex gap-12 mt-8 animate-fadeIn animation-delay-600">
                <i className="fa-solid fa-heart text-red-500 text-6xl animate-pulse"></i>
                <i className="fa-solid fa-cog text-gray-700 text-6xl animate-spin-slow"></i>
                <i className="fa-solid fa-bell text-yellow-500 text-6xl animate-shake"></i>
            </div>
        </div>
    );
};

export default NotFoundPage;