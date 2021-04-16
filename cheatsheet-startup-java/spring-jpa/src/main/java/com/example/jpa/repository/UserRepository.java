package com.example.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.jpa.entity.SysUserEntity;

import java.util.List;


@Transactional(readOnly = false, rollbackFor = Exception.class)
@Repository
public interface UserRepository extends JpaRepository<SysUserEntity, Long>, JpaSpecificationExecutor<SysUserEntity> {

    @Query(value = "select  * from sys_user ", nativeQuery = true)
    List<SysUserEntity> findRoles();

    @Query(value = "SELECT * " +
            "FROM sys_user su " +
            "WHERE su.id IN (SELECT" +
            "    sur.user_id " +
            "  FROM sys_user_role sur" +
            "  WHERE sur.role_id = :roleId)", nativeQuery = true)
    List<SysUserEntity> findUsersByRoleId(@Param("roleId") Long roleId);
}
