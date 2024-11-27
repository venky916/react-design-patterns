import {ResourceLoader} from '../../components/containerComponents/ResourceLoader'
import { UserInfo } from '../../components/containerComponents/UserInfo'
import { ProductInfo } from '../../components/containerComponents/ProductInfo'
export const ContainerResourcePage = () => {
    
    return (
      <>
        <ResourceLoader resourceUrl={"/users/123"} resourceName={"user"}>
          <UserInfo />
        </ResourceLoader>
        <ResourceLoader resourceName={"product"} resourceUrl={"/products/1234"}>
          <ProductInfo />
        </ResourceLoader>
      </>
    );
}