package kr.goguma.leica.soppha.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import kr.goguma.leica.soppha.models.NewMember;

@Mapper
public interface MemberMapper {

        //가입 인원수 집계
        @Insert ("insert into NewMember (date, `count`) "
                + "SELECT DATE(regdate) AS date, COUNT(*) AS count "
                + "FROM Member "
                + "WHERE DATE(regdate) = DATE(DATE_ADD(NOW(), INTERVAL -1 DAY))"
                + "GROUP BY DATE(regdate)")
                public void insertMember();


        //일별 가입자 조회
        @Select("SELECT "
        + "`date`, `count` "
        + "FROM NewMember "
        + "WHERE `date` >= DATE(DATE_ADD(NOW(), INTERVAL -7 DAY)) " )
        public List<NewMember> getDailyNewMembers();

        //주간별 가입자 통계
        @Select("SELECT "
        + "DATE_FORMAT(regdate, '%Y-%M' ) AS WEEKEND, "
        + "DATE_FORMAT(DATE_SUB(`regdate`, INTERVAL (DAYOFWEEK(regdate)-1) DAY), '%Y/%m/%d') AS Week_Start, "
        + "DATE_FORMAT(DATE_SUB(`regdate`, INTERVAL (DAYOFWEEK(regdate)-7) DAY), '%Y/%m/%d') AS Week_End, "
        + "SUM(count) AS count "
        + "FROM NewMember "
        + "WHERE DATE(regdate) >= DATE(DATE_ADD(NOW(), INTERVAL -7 DAY)) "
        + "GROUP BY WEEKEND, Week_Start, Week_End ")
        List<NewMember> getWeeklyNewMembers();
}
