package com.example.jpa.enums;

import java.util.Optional;
import java.util.stream.Stream;
import lombok.AllArgsConstructor;
import lombok.Getter;


@AllArgsConstructor
@Getter
public enum StatusEnum {
    /**
     * 实体状态
     */
    ENABLE(1, "开启"),
    DISABLED(0, "关闭");

    private Integer code;
    private String description;

    public static StatusEnum getEnum(Integer code) {
        final StatusEnum[] values = values();
        final Optional<StatusEnum> optionalStatusEnum = Stream.of(values).filter(statusEnum -> {
            return statusEnum.code.equals(code);
        }).findFirst();
        if (optionalStatusEnum.isPresent()) {
            return optionalStatusEnum.get();
        } else {
            throw new IllegalArgumentException("status code not match. code=" + code);
        }
    }
}
