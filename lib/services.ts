// types.ts
export interface ServiceInfo {
    title: string;
    description: string;
    image: StaticImageData;
  }
  
  export interface ServiceData {
    [key: string]: ServiceInfo;
  }
  
  // services.ts
  import { StaticImageData } from 'next/image';
  import CameraMan from '@/public/assets/services/camera-man.svg';
  import PlanDesign from '@/public/assets/services/plan-design.svg';
  import PlanDevelop from '@/public/assets/services/plan-develop.svg';
  import PlanLaunch from '@/public/assets/services/plan-launch.svg';
  
  export const services: Record<string, StaticImageData> = {
      CameraMan,
      PlanDesign,
      PlanDevelop,
      PlanLaunch
  };