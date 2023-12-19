import { usePathname } from 'next/navigation';
export const checkActive = (route:string) =>{
    const  pathName = usePathname();
    if(pathName === route) return 'active'
  }