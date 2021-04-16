package com.example.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.jpa.entity.SysRoleEntity;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface RoleRepository extends JpaRepository<SysRoleEntity, Long>, JpaSpecificationExecutor<SysRoleEntity> {

    @Transactional(rollbackFor = Exception.class)
    @Modifying
    @Query(value = "update SysRoleEntity set dataScope=:dataScopeId where id=:id")
    Integer updateById(@Param("id") Long id, @Param("dataScopeId") Integer dataScopeId);
}
