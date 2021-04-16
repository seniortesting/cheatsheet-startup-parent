package com.example.jpa.util.entity;

import java.util.HashMap;
import java.util.Map;
import javax.persistence.AttributeConverter;


public abstract class AbstractEntityEnumConverter<T extends DbEnumType> implements AttributeConverter<T, String> {
    private final Map<String, T> store = new HashMap<>();

    protected AbstractEntityEnumConverter(T[] enums) {
        for (T i : enums) {
            store.put(i.getDbMappingKey(), i);
        }
        if (store.size() != enums.length) {
            // avoid duplicated dbMappingKey
            throw new IllegalArgumentException("enum keys not unique");
        }
    }

    @Override
    public String convertToDatabaseColumn(final T attribute) {
        if (attribute == null) {
            return null;
        }
        return attribute.getDbMappingKey();
    }

    @Override
    public T convertToEntityAttribute(final String dbData) {
        if (dbData == null) {
            return null;
        }
        return store.get(dbData);
    }
}