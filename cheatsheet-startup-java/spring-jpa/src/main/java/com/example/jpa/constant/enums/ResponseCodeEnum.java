package com.example.jpa.constant.enums;

import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;


@AllArgsConstructor
@Getter
public enum ResponseCodeEnum {

    CODE_000F9999("000F9999", "系统异常，请稍后重试!", "system error,please try again!"),
    CODE_000F1001("000F1001", "访问地址不存在", "Access address does not exist"),
    CODE_000F1002("000F1002", "内部系统异常", "Internal system exception"),
    CODE_000F1003("000F1003", "数据库异常", "Database exception"),
    CODE_000F2001("000F2001", "外部系统异常", "External system exception"),
    CODE_000F3001("000F3001", "系统内远程调用超时", "Internal system call timeout"),
    CODE_000F3002("000F3002", "系统外远程调用超时", "External system call timeout"),
    CODE_000F3003("000F3003", "乐观锁异常", "Optimistic lock exception"),
    CODE_100S1000("100S1000", "业务系统交易成功", "Biz system success"),
    CODE_100E1001("100E1001", "{}[{}]参数不能为空", "{}[{}] not found."),
    CODE_100E1002("100E1002", "{0}[{1}]已存在", "{0}[{1}] already exists."),
    CODE_100E2001("100E2001", "用户不存在或已注销", "User does not exist or is logged out"),
    CODE_100E9999("100E9999", "未知错误", "Unknown error"),
    CODE_200S1000("200S1000", "校验通过", "Verification passed"),
    CODE_200E1001("200E1001", "{}[{}]参数不能为空", "{}[{}] not found."),
    CODE_200E1002("200E1002", "参数异常", "Parameter is invalid"),
    CODE_200E9999("200E9999", "系统异常，请重试", "System error,please try again!"),
    CODE_200S2000("200S2000", "数据获取成功", "Data acquired successfully"),
    CODE_200E2001("200E2001", "业务异常", "Business exception");

    private final String code;
    private final String msgZh;
    private final String msgEn;
    protected static final Map<String, ResponseCodeEnum> CODE_ENUM_MAP = new HashMap();
    static {
        ResponseCodeEnum[] values = values();
        ResponseCodeEnum[] var1 = values;
        int var2 = values.length;

        for(int var3 = 0; var3 < var2; ++var3) {
            ResponseCodeEnum value = var1[var3];
            CODE_ENUM_MAP.put(value.getCode(), value);
        }

    }
}

