package com.taskit.app.mappers;

import java.util.Map;

public class TaskPriorityMapper {
    private static final Map<Integer, String> priorityMap = Map.of(
            0, "Blocker",
            1, "Urgent",
            3, "High",
            4, "Medium",
            5, "Low",
            6, "Very Low"
    );

    public static Integer getPriorityValueFromName(String name) {
        for (Map.Entry<Integer, String> entry : priorityMap.entrySet()) {
            if (entry.getValue().equals(name)) {
                return entry.getKey();
            }
        }
        return null;
    }

    public static String getPriorityNameFromValue(Integer key) {
        return priorityMap.get(key);
    }
}
