export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: any;
}) => Promise<{
    cosmos: {
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        group: {
            v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: import("./applications/transfer/v1/query.lcd").LCDQueryClient;
            };
        };
        core: {
            channel: {
                v1: import("./core/channel/v1/query.lcd").LCDQueryClient;
            };
        };
    };
}>;