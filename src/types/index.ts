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
    participant: string;
}

export interface PlanEvent {
    title: string;
    start: Date;
    allDay?: boolean;
}