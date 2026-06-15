import { api } from "..";
import { Auth, AuthorizationResponse, AuthResponse, UserPath } from "./auth.type";

export const AuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<AuthResponse, Auth>({
      query: (data) => {
        if (data.login) {
          return {
            url: "/auth/login",
            method: "POST",
            body: data,
          };
        } else {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: data.username,
              email: data.email,
              password: data.password,
              role: "customer",
              avatar: "https://picsum.photos",
            },
          };
        }
      },
    }),
    updateUser: builder.mutation<UserPath, { id: number; data: Partial<UserPath> & Record<string, any> }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    Authorization: builder.query<AuthorizationResponse, void>({
      query: () => {
        const accessToken = localStorage.getItem("access_token"); 
        if (!accessToken) {
          throw new Error("Access token is missing");
        }
        return {
          url: "/auth/profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useUpdateUserMutation, useAuthorizationQuery } = AuthApi;
