package kr.goguma.leica.soppha.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import kr.goguma.leica.soppha.models.NewMember;

//src
@Mapper
public interface MemberMapper {

        //가입 인원수 집계
        @Insert (
                "insert into NewMember (date, `count`) "
                + "SELECT DATE(date) AS date, COUNT(*) AS count "
                + "FROM Member "
                + "WHERE DATE(date) = DATE(DATE_ADD(NOW(), INTERVAL -1 DAY)) "
                + "AND DATE(date) NOT IN (SELECT date FROM NewMember) "
                + "GROUP BY DATE(date)")
                public void insertMember();


        //일별 가입자 조회
        @Select("SELECT "
        + "DATE(`date`) AS `date`, "
        + "SUM(`count`) AS `count` "
        + "FROM NewMember "
        + "WHERE `date` >= CURDATE() - INTERVAL 6 DAY "
        + "GROUP BY DATE(`date`) "
        + "ORDER BY DATE(`date`)")
        public List<NewMember> getDailyNewMembers();

        //주간별 가입자 통계
        @Select("SELECT "
        + "DATE_FORMAT(date, '%Y-%M' ) AS weekEnd, "
        + "DATE_FORMAT(DATE_SUB(`date`, INTERVAL (DAYOFWEEK(date)-1) DAY), '%Y/%m/%d') AS WeekStart, "
        + "DATE_FORMAT(DATE_SUB(`date`, INTERVAL (DAYOFWEEK(date)-7) DAY), '%Y/%m/%d') AS WeekEndDate, "
        + "SUM(count) AS count "
        + "FROM NewMember "
        + "WHERE DATE(date) >= DATE(DATE_ADD(NOW(), INTERVAL -35 DAY)) "
        + "GROUP BY weekEnd, WeekStart, WeekEndDate ")
        List<NewMember> getWeeklyNewMembers();
}
