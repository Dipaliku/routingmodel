export interface Iproduct{
    pname: string;
    pid:  string;
    pstatus: pstatus;
    canreturn: number;
}

export type pstatus = "in-progress" | "dispatched" | "delivered";