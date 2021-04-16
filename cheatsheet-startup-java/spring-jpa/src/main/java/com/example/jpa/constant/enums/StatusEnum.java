package com.example.jpa.constant.enums;

import java.util.stream.Stream;
import com.example.jpa.util.entity.AbstractEntityEnumConverter;
import com.example.jpa.util.entity.DbEnumType;
import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public enum StatusEnum implements DbEnumType {
    /**
     * 实体状态
     */
    ENABLE("打开", "1"),
    DISABLED("关闭", "0");

    private final String description;
    private final String code;

    public static StatusEnum getEnumByCode(Integer code) {
        return Stream.of(StatusEnum.values()).filter(statusEnum -> statusEnum.code.equals(code)).findFirst()
                .orElse(null);
    }

    @Override public String getDbMappingKey() {
        return this.code;
    }

    public static class StatusEnumConverter extends AbstractEntityEnumConverter<StatusEnum> {
        protected StatusEnumConverter() {
            super(StatusEnum.values());
        }
    }
}
