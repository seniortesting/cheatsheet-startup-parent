package com.example.jpa.util.hanlder;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.example.jpa.constant.enums.ResponseCodeEnum;
import com.example.jpa.exception.BizException;
import com.example.jpa.util.entity.Result;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestControllerAdvice
public class ControllerAdviceHandler {

    /**
     * 业务层普通异常处理
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(value = BizException.class)
    public Result handleServiceExceptionHandler(BizException exception) {
        final String errorMsg = null != exception.getMessage() ? exception.getMessage() :
                ResponseCodeEnum.CODE_200E2001.getMsgZh();
        LOGGER.error(errorMsg, exception);
        return Result.fail(ResponseCodeEnum.CODE_200E2001, errorMsg);
    }

}
