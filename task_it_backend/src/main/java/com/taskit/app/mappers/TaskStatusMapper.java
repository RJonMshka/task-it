package com.taskit.app.mappers;

import java.util.Map;

public class TaskStatusMapper {
    private static final Map<Integer, String> statusMap = Map.of(
            1, "To Do",
            2, "Doing",
            3, "Done"
    );

    public static Integer getStatusValueFromName(String name) {
        for (Map.Entry<Integer, String> entry : statusMap.entrySet()) {
            if (entry.getValue().equals(name)) {
                return entry.getKey();
            }
        }
        return null;
    }

    public static String getStatusNameFromValue(Integer key) {
        return statusMap.get(key);
    }
}
