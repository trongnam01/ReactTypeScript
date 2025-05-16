import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ProvidersProps {
    children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
    const [client] = useState(() => new QueryClient());
    console.log(process.env.REACT_APP_API_URL, process.env);

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default Providers;
