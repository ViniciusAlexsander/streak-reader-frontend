import { Provider } from "@/components/provider";
import { Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Box
            px={6}
            paddingTop={6}
            paddingBottom={12}
            maxWidth="60rem"
            mx="auto"
          >
            {children}
          </Box>
        </Provider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeButton={true}
          rtl={false}
          theme="dark"
        />
      </body>
    </html>
  );
}
