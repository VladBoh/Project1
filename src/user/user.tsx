import { useAuthorizationQuery } from "@/api/auth/auth";
import { UserChangeForm } from "./user-change-form"
import { UserForm } from "./user-form"

export const UserCollection = () => {
const { data } = useAuthorizationQuery();

if (!data) {
  return null;
}


  return (
    <div>
      <div>
      <UserForm data={data} />
    </div>
      <div>
        
      </div>
    </div>
  )
}
