"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useRecoilState } from "recoil";

import Empty from "@/components/Empty";
import FormItem from "@/components/Items/FormItem/FormItem";
import FormSkeletonItem from "@/components/Skeletons/FormSkeletonItem";
import { Button } from "@/components/ui/button";
import { AuthAtom, SignInMethods } from "@/services/auth";
import { Form, FormApi, FormEvent } from "@/services/form";
import { LocalKeys } from "@/services/storage";
import AppScreens from "@/types/router.type";
import InputFormId from "./components/InputFormId";

export default function Home() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(AuthAtom.currentUser);
  const [form, setForm] = useState({
    page: 1,
    limit: 5,
    loading: false,
    fullLoading: true,
    data: [] as Form[],
    total: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem(LocalKeys.AUTH_TOKEN);

    if (!token) {
      router.push(AppScreens.SIGN_IN);
    } else {
      setCurrentUser({
        id: "1",
        name: "John Doe",
        email: "tuyen@gmail.com",
        type: SignInMethods.LOCAL,
      });
    }
  }, [router, setCurrentUser]);

  const getFormList = useCallback(() => {
    if (currentUser?.id) {
      FormApi.getList({
        page: form.page,
        limit: form.limit,
        user_id: currentUser.id,
      }).then((res) => {
        setForm((prevForm) => ({
          ...prevForm,
          loading: false,
          fullLoading: false,
          data: res.data,
          total: res.total,
        }));
      });
    }
  }, [form.page, form.limit, currentUser?.id]);

  useEffect(() => {
    const unsubscribe = FormEvent.onReloadFormRecent(() => {
      getFormList();
    });

    return unsubscribe;
  }, [getFormList]);

  useEffect(() => {
    getFormList();
  }, [getFormList]);

  const renderChildren = useCallback(() => {
    if (form.total) {
      return form.data.map((form) => <FormItem form={form} key={form.id} />);
    }

    if (form.fullLoading) {
      return (
        <div className="py-10 flex items-center justify-center">
          <ReactLoading type="spin" width={40} height={40} color="black" />
        </div>
      );
    }

    return <Empty />;
  }, [form.total, form.data, form.fullLoading]);

  const handleLoadMore = () => {
    setForm((prevForm) => ({
      ...prevForm,
      page: prevForm.page + 1,
      loading: true,
    }));
  };

  return (
    <div className="container flex flex-col justify-center gap-4 py-10 min-h-full">
      <InputFormId />

      <div className="bg-white p-4 w-full rounded-lg flex flex-col gap-y-2 relative">
        <h1 className="font-bold text-black text-lg">Recently viewed</h1>
        {renderChildren()}

        {form.loading &&
          Array(5)
            .fill({})
            .map((index) => <FormSkeletonItem key={index} />)}

        {form.data.length < form.total && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
      </div>
    </div>
  );
}
