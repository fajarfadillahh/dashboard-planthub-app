import axios, { isAxiosError } from "axios";
import { getSession } from "next-auth/react";

type FetcherParams = {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: unknown;
  token?: boolean;
  file?: boolean;
};

export async function fetcher({
  url,
  method,
  data,
  token,
  file,
}: FetcherParams) {
  const options = {
    url: "https://apiplanthub.vercel.app" + url,
    method,
  };

  if (data) {
    Object.assign(options, { data });
  }

  if (token) {
    const session = await getSession();

    Object.assign(options, {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    });
  }

  if (file) {
    Object.assign(options, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
}
