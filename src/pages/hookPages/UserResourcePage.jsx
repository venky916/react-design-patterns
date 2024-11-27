import { UserResourcehook } from "../../components/hooksComp/UserResourcehook"


export const UserResourcePage = () => {
    return (
      <>
        <UserResourcehook userId={'123'} />
        <UserResourcehook userId={'234'} />
        <UserResourcehook userId={'345'} />
      </>
    );
}