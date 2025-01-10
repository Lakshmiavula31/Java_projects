declare module 'google-charts' {
    export const visualization: {
        arrayToDataTable: (data: any[]) => any;
        BarChart: any;
        load: (packages: string[], callback: () => void) => void;
        setOnLoadCallback: (callback: () => void) => void;
    };
}