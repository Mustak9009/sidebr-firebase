import { usePathname } from 'next/navigation';
export const CheckActiveness = (route:string) =>{
    const  pathName = usePathname();
    if(pathName === route) return 'active'
  }