"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormApi } from "@/services/form";
import AppScreens from "@/types/router.type";

const InputFormId: React.FC = () => {
  const [formId, setFormId] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckFormID = () => {
    setLoading(true);

    FormApi.checkFormExist(formId).then((res) => {
      if (res) {
        window.location.href = `/form/${formId}`;
        router.push(`${AppScreens.FORMS}/${formId}`);
      } else {
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Enter form ID"
        containerClassName="flex-1"
        value={formId}
        onChange={(e) => setFormId(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCheckFormID();
          }
        }}
      />

      <Button
        loading={loading}
        disabled={loading || !formId}
        onClick={handleCheckFormID}
      >
        Open
      </Button>
    </div>
  );
};

export default InputFormId;
