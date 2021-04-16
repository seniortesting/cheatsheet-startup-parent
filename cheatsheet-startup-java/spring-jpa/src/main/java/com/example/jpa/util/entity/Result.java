package com.example.jpa.util.entity;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import com.example.jpa.constant.enums.ResponseCodeEnum;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import cn.hutool.core.util.StrUtil;
import lombok.Data;


@Data
public class Result<T> implements Serializable {

    protected static final String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss.SSS Z";

    @JsonProperty(
            value = "success",
            index = 1
    )
    private Boolean success;
    @JsonProperty(
            value = "timestamp",
            index = 2
    )
    private String timestamp;
    @JsonProperty(
            value = "code",
            index = 3
    )
    private String code;
    @JsonProperty(
            value = "message",
            index = 4
    )
    private String msg;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty(
            value = "data",
            index = 5
    )
    private T data;

    private Result(final ResponseCodeEnum responseCodeEnum, final String msg, final T data) {
        this.timestamp = ZonedDateTime.now().format(DateTimeFormatter.ofPattern(DATE_FORMAT));
        this.code = responseCodeEnum.getCode();
        this.msg = StrUtil.isNotEmpty(msg) ? msg : responseCodeEnum.getMsgZh();
        this.success = responseCodeEnum.equals(ResponseCodeEnum.CODE_100S1000);
        this.data = data;
    }

    /**
     * 成功
     *
     * @param msg
     * @return Result<T>
     * @author Walter Hu
     * @date 2019/12/8
     * @since 1.8
     */
    public static <T> Result<T> success(String msg) {
        return success(null, msg);
    }

    public static <T> Result<T> success(T data) {
        return success(data, null);
    }

    public static <T> Result<T> success(T data, String msg) {
        return new Result(ResponseCodeEnum.CODE_100S1000, msg, data);
    }

    /**
     * 失败
     *
     * @param msg
     * @return Result<T>
     * @author Walter Hu
     * @date 2019/12/8
     * @since 1.8
     */

    public static <T> Result<T> fail(String msg) {
        return fail(ResponseCodeEnum.CODE_200E2001, msg);
    }

    public static <T> Result<T> fail(ResponseCodeEnum code) {
        return fail(code, null);
    }

    public static <T> Result<T> fail(ResponseCodeEnum code, String msg) {
        return fail(code, msg, null);
    }

    public static <T> Result<T> fail(ResponseCodeEnum code, String msg, T data) {
        return fail(code, msg, data);
    }

    public static <T> Result<T> status(boolean flag) {
        return flag ? success(null) : fail(ResponseCodeEnum.CODE_200E2001);
    }
}
