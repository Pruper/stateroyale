/*

Made by Pruper

*/

const nationStaticData = [
    { name: "Alabama", color: "FFCC00", stateId: "AL" },
    { name: "Alaska", color: "BD9DC6", stateId: "AK" },
    { name: "Arizona", color: "DD4D44", stateId: "AZ" },
    { name: "Arkansas", color: "9F3644", stateId: "AR" },
    { name: "California", color: "FF842A", stateId: "CA" },
    { name: "Colorado", color: "87D9B1", stateId: "CO" },
    { name: "Connecticut", color: "00D6D1", stateId: "CT" },
    { name: "Delaware", color: "D98191", stateId: "DE" },
    { name: "District of Columbia", color: "7F7F7F", stateId: "DC" },
    { name: "Florida", color: "FC768F", stateId: "FL" },
    { name: "Georgia", color: "278DD8", stateId: "GA" },
    { name: "Hawaii", color: "E86E2B", stateId: "HI" },
    { name: "Idaho", color: "02BDAC", stateId: "ID" },
    { name: "Illinois", color: "00F4D0", stateId: "IL" },
    { name: "Indiana", color: "D82B47", stateId: "IN" },
    { name: "Iowa", color: "FF4CB7", stateId: "IA" },
    { name: "Kansas", color: "94964B", stateId: "KS" },
    { name: "Kentucky", color: "FEBD01", stateId: "KY" },
    { name: "Louisiana", color: "006965", stateId: "LA" },
    { name: "Maine", color: "E81C73", stateId: "ME" },
    { name: "Maryland", color: "F4113E", stateId: "MD" },
    { name: "Massachusetts", color: "664B44", stateId: "MA" },
    { name: "Michigan", color: "4C00FF", stateId: "MI" },
    { name: "Minnesota", color: "D6AE3D", stateId: "MN" },
    { name: "Mississippi", color: "F55509", stateId: "MS" },
    { name: "Missouri", color: "C83D76", stateId: "MO" },
    { name: "Montana", color: "DDDF00", stateId: "MT" },
    { name: "Nebraska", color: "214B7D", stateId: "NE" },
    { name: "Nevada", color: "FFCB5B", stateId: "NV" },
    { name: "New Hampshire", color: "2070B5", stateId: "NH" },
    { name: "New Jersey", color: "C80F2E", stateId: "NJ" },
    { name: "New Mexico", color: "E9B7D2", stateId: "NM" },
    { name: "New York", color: "FF7B00", stateId: "NY" },
    { name: "North Carolina", color: "00CDA6", stateId: "NC" },
    { name: "North Dakota", color: "00A19B", stateId: "ND" },
    { name: "Ohio", color: "DA9B00", stateId: "OH" },
    { name: "Oklahoma", color: "FF6E69", stateId: "OK" },
    { name: "Oregon", color: "C600BA", stateId: "OR" },
    { name: "Pennsylvania", color: "FEDCD0", stateId: "PA" },
    { name: "Rhode Island", color: "19338A", stateId: "RI" },
    { name: "South Carolina", color: "564EC8", stateId: "SC" },
    { name: "South Dakota", color: "FCC29D", stateId: "SD" },
    { name: "Tennessee", color: "D777B4", stateId: "TN" },
    { name: "Texas", color: "FED65D", stateId: "TX" },
    { name: "Utah", color: "551051", stateId: "UT" },
    { name: "Vermont", color: "A4195C", stateId: "VT" },
    { name: "Virginia", color: "3BAA34", stateId: "VA" },
    { name: "Washington", color: "DD0000", stateId: "WA" },
    { name: "West Virginia", color: "FF5531", stateId: "WV" },
    { name: "Wisconsin", color: "5B2242", stateId: "WI" },
    { name: "Wyoming", color: "FFDD00", stateId: "WY" }
]

const states = {
    "AL": { name: "Alabama", neighbors: ["FL", "GA", "MS", "TN"], power: 50 },
    "AK": { name: "Alaska", neighbors: ["HI", "WA"], power: 7 },
    "AZ": { name: "Arizona", neighbors: ["CA", "CO", "NV", "NM", "UT"], power: 72 },
    "AR": { name: "Arkansas", neighbors: ["LA", "MO", "MS", "OK", "TN", "TX"], power: 30 },
    "CA": { name: "California", neighbors: ["AZ", "HI", "NV", "OR"], power: 392 },
    "CO": { name: "Colorado", neighbors: ["AZ", "KS", "NE", "NM", "OK", "UT", "WY"], power: 58 },
    "CT": { name: "Connecticut", neighbors: ["MA", "NY", "RI"], power: 36 },
    "DE": { name: "Delaware", neighbors: ["MD", "NJ", "PA"], power: 10 },
    "DC": { name: "District of Columbia", neighbors: ["MD", "VA"], power: 6 },
    "FL": { name: "Florida", neighbors: ["AL", "GA"], power: 217 },
    "GA": { name: "Georgia", neighbors: ["AL", "FL", "NC", "SC", "TN"], power: 107 },
    "HI": { name: "Hawaii", neighbors: ["AK", "CA"], power: 14 },
    "ID": { name: "Idaho", neighbors: ["MT", "NV", "OR", "UT", "WA", "WY"], power: 19 },
    "IL": { name: "Illinois", neighbors: ["IA", "KY", "MO", "WI", "IN"], power: 126 },
    "IN": { name: "Indiana", neighbors: ["IL", "KY", "MI", "OH"], power: 68 },
    "IA": { name: "Iowa", neighbors: ["IL", "MN", "MO", "NE", "SD", "WI"], power: 31 },
    "KS": { name: "Kansas", neighbors: ["CO", "MO", "NE", "OK"], power: 29 },
    "KY": { name: "Kentucky", neighbors: ["IN", "IL", "MO", "OH", "TN", "VA", "WV"], power: 45 },
    "LA": { name: "Louisiana", neighbors: ["AR", "MS", "TX"], power: 46 },
    "ME": { name: "Maine", neighbors: ["NH"], power: 13 },
    "MD": { name: "Maryland", neighbors: ["DC", "DE", "PA", "VA", "WV"], power: 61 },
    "MA": { name: "Massachusetts", neighbors: ["CT", "NH", "NY", "RI", "VT"], power: 69 },
    "MI": { name: "Michigan", neighbors: ["IN", "OH", "WI"], power: 100 },
    "MN": { name: "Minnesota", neighbors: ["IA", "ND", "SD", "WI"], power: 57 },
    "MS": { name: "Mississippi", neighbors: ["AL", "AR", "LA", "TN"], power: 29 },
    "MO": { name: "Missouri", neighbors: ["AR", "IA", "IL", "KS", "KY", "NE", "OK", "TN"], power: 61 },
    "MT": { name: "Montana", neighbors: ["ID", "ND", "SD", "WY"], power: 11 },
    "NE": { name: "Nebraska", neighbors: ["CO", "IA", "KS", "MO", "SD", "WY"], power: 19 },
    "NV": { name: "Nevada", neighbors: ["AZ", "CA", "ID", "OR", "UT"], power: 31 },
    "NH": { name: "New Hampshire", neighbors: ["MA", "ME", "VT"], power: 13 },
    "NJ": { name: "New Jersey", neighbors: ["DE", "NY", "PA"], power: 92 },
    "NM": { name: "New Mexico", neighbors: ["AZ", "CO", "OK", "TX", "UT"], power: 21 },
    "NY": { name: "New York", neighbors: ["CT", "MA", "NJ", "PA", "VT"], power: 198 },
    "NC": { name: "North Carolina", neighbors: ["GA", "SC", "TN", "VA"], power: 105 },
    "ND": { name: "North Dakota", neighbors: ["MN", "MT", "SD"], power: 7 },
    "OH": { name: "Ohio", neighbors: ["IN", "KY", "MI", "PA", "WV"], power: 117 },
    "OK": { name: "Oklahoma", neighbors: ["AR", "CO", "KS", "MO", "NM", "TX"], power: 39 },
    "OR": { name: "Oregon", neighbors: ["CA", "ID", "NV", "WA"], power: 42 },
    "PA": { name: "Pennsylvania", neighbors: ["DE", "MD", "NJ", "NY", "OH", "WV"], power: 129 },
    "RI": { name: "Rhode Island", neighbors: ["CT", "MA"], power: 10 },
    "SC": { name: "South Carolina", neighbors: ["GA", "NC"], power: 51 },
    "SD": { name: "South Dakota", neighbors: ["IA", "MN", "MT", "NE", "ND", "WY"], power: 8 },
    "TN": { name: "Tennessee", neighbors: ["AL", "AR", "GA", "KY", "MO", "MS", "NC", "VA"], power: 69 },
    "TX": { name: "Texas", neighbors: ["AR", "LA", "NM", "OK"], power: 295 },
    "UT": { name: "Utah", neighbors: ["AZ", "CO", "ID", "NM", "NV", "WY"], power: 33 },
    "VT": { name: "Vermont", neighbors: ["MA", "NH", "NY"], power: 6 },
    "VA": { name: "Virginia", neighbors: ["DC", "KY", "MD", "NC", "TN", "WV"], power: 86 },
    "WA": { name: "Washington", neighbors: ["AK", "ID", "OR"], power: 77 },
    "WV": { name: "West Virginia", neighbors: ["KY", "MD", "OH", "PA", "VA"], power: 17 },
    "WI": { name: "Wisconsin", neighbors: ["IA", "IL", "MN", "MI"], power: 58 },
    "WY": { name: "Wyoming", neighbors: ["CO", "ID", "MT", "NE", "SD", "UT"], power: 5 }
}

const formables = [
    { name: "Confederacy", color: "D30000", statesRequired: ["AL", "FL", "GA", "LA", "MS", "SC", "TX"] },
    { name: "New England", color: "0000D3", statesRequired: ["CT", "MA", "ME", "NH", "RI", "VT"] },
    { name: "Pacific States", color: "00D300", statesRequired: ["AK", "CA", "HI", "OR", "WA"] }
]