export interface IndicatorProps {
    title: string
    url: string 
}

export interface Plan {
    _id: string;
    title: string;
    description: string;
    location: string;
    date: Date;
    participants: string;
}

export interface CardProps {
    plan: Plan;
}

export interface PlannerFormProps {
    initialData?: Plan;
    isEdit?: boolean;
  }