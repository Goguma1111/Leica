
import java.util.Map;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MemberMapper {

//가입 인원수 집계
@Insert ("insert into NewMember (date, count) "
        + "VALUES (#{date}, #{count})")
        public void insertMember(Map<String, Object> params);


        @Select("SELECT "
        + "date, count(*)"
        + "FROM NewMember "
        + "WHERE date = #{date}")
        public int countNewMembers(@Param("date") String date);

}
