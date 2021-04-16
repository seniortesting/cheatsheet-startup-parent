package com.example.jpa.entity;

import com.example.jpa.util.BaseEntity;
import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "sys_role")
public class SysRoleEntity extends BaseEntity {

    @Column(name = "role_name")
    private String roleName;

    @Column(name = "role_code")
    private String roleCode;

    @Column(name = "role_order")
    private Integer roleOrder;

    @Column(name = "data_scope")
    private Integer dataScope;

}
