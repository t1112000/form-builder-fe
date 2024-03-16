import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

interface GoogleButtonProps {
  text: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ text }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginGoogle = useGoogleLogin({
    onSuccess: async (data: TokenResponse) => {
      if (data.access_token) {
        setLoading(true);

        setTimeout(() => {
          console.log({ data, router });
          setLoading(false);
        }, 2000);

        // AuthApi.signIn({
        //   data: {
        //     tokenId: data.access_token,
        //   },
        //   method: SignInMethods.GOOGLE,
        // }).then((res) => {
        //   setLoading(false);

        //   if (res) {
        //     router.push(AppScreens.HOME);
        //   }
        // });
      }
    },
    onError: (err) => {
      console.warn("Google sign in failed", err);
    },
  });

  return (
    <Button
      variant="outline"
      onClick={() => loginGoogle()}
      loading={loading}
      disabled={loading}
    >
      <Image
        src="/svgs/google.svg"
        alt="google"
        width={20}
        height={20}
        className="mr-2"
      />
      {text}
    </Button>
  );
};

export default GoogleButton;
