package com.example.jpa.repository;

import java.util.List;

import com.example.jpa.entity.SysRoleEntity;
import com.example.jpa.entity.SysUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.jpa.entity.SysUserRoleEntity;


@Repository
public interface UserRoleRepository
        extends JpaRepository<SysUserRoleEntity, Long>, JpaSpecificationExecutor<SysUserRoleEntity> {
    @Query(value = "SELECT sr.id, "
            + "       sr.role_code, "
            + "       sr.role_name "
            + "FROM sys_user su "
            + "         INNER JOIN sys_user_role sur ON su.id = sur.user_id "
            + "         LEFT JOIN sys_role sr ON sur.role_id = sr.id "
            + "WHERE su.id = :userId", nativeQuery = true)
    List<Object[]> queryUserRoleByUserId(@Param("userId") Long userId);

}
