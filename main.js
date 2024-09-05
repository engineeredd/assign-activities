function assignActivities(testCases, allActivities) {
    let results = [];

    for (let t = 0; t < testCases; t++) {
        let activities = allActivities[t];
        let N = activities.length;

        // Adding the original index of the activity to retain the input order
        for (let i = 0; i < N; i++) {
            activities[i].push(i); // Append original index to each activity
        }

        // Sort activities based on start time
        activities.sort((a, b) => a[0] - b[0]);

        // To track the end times for Loraine (C) and Charles (J)
        let cEnd = 0;
        let jEnd = 0;
        let assignment = new Array(N); // To store the assignment ('C' or 'J')

        let possible = true;

        for (let i = 0; i < N; i++) {
            let [start, end, index] = activities[i];

            if (start >= cEnd) {
                assignment[index] = 'C';
                cEnd = end;
            } else if (start >= jEnd) {
                assignment[index] = 'J';
                jEnd = end;
            } else {
                possible = false;
                break;
            }
        }

        if (possible) {
            results.push(`Case #${t + 1}: ${assignment.join('')}`);
        } else {
            results.push(`Case #${t + 1}: IMPOSSIBLE`);
        }
    }

    return results;
}

// Example usage with the test cases provided
let testCases = 4;
let allActivities = [
    [[360, 480], [420, 540], [600, 660]],  // Test Case 1
    [[0, 1440], [1, 3], [2, 4]],          // Test Case 2
    [[99, 150], [1, 100], [100, 301], [2, 5], [150, 250]],  // Test Case 3
    [[0, 720], [720, 1440]]               // Test Case 4
];

let results = assignActivities(testCases, allActivities);
results.forEach(result => console.log(result));