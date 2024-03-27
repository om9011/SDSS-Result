import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userData from '../Data/data.json';

const SearchResultPage = () => {
    const { rollNumber } = useParams();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const processUserData = (user) => {
            // Process user data here
            const totalMarks = user['Total Marks'];
            const obtainedMarks = totalObtainedMarks(user); // Calculate total obtained marks

            const percentage = (obtainedMarks / totalMarks) * 100;
            const status = percentage >= 40 ? 'Pass' : 'Fail';

                // Split the full name into an array of first and last names
    const nameParts = user['Student Name :'].split(' ');

    // Concatenate the last name with the first name
    const name = nameParts[0] + ' ' + nameParts[nameParts.length - 1];

            const marks = {
                Marathi: user.Marathi || 0,
                Hindi: user.Hindi || 0,
                English: user.English || 0,
                Maths: user.Maths || 0,
                Science: user.Science || 0,
                History: user.History || 0,
            };

            // Conditionally include Geography property based on user's standard
            if (user['Standard'] !== "5th") {
                marks.Geography = user.Geography || 0;
            }

            // Set user details state
            setUserDetails({
                name: name,
                standard: user['Standard'],
                rollNumber: user['Roll No.'],
                marks: marks, // Assign the marks object
                totalMarks,
                totalObtainedMarks: obtainedMarks,
                percentage,
                status
            });
        };

        const totalObtainedMarks = (user) => {
            // Calculate total obtained marks
            const MarathiMarks = typeof user.Marathi === 'number' ? user.Marathi : 0;
            const HindiMarks = typeof user.Hindi === 'number' ? user.Hindi : 0;
            const EnglishMarks = typeof user.English === 'number' ? user.English : 0;
            const MathsMarks = typeof user.Maths === 'number' ? user.Maths : 0;
            const ScienceMarks = typeof user.Science === 'number' ? user.Science : 0;
            const HistoryMarks = typeof user.History === 'number' ? user.History : 0;
            const GeographyMarks = typeof user.Geography === 'number' ? user.Geography : 0;

            return MarathiMarks + HindiMarks + EnglishMarks + MathsMarks + ScienceMarks + HistoryMarks + GeographyMarks;
        };

        const user = userData.users.find(user => user['Roll No.'] === parseInt(rollNumber));
        if (user) {
            processUserData(user);
        } else {
            console.log('User not found');
        }
    }, [rollNumber]);

    return (
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
            {userDetails ? (
                <div className="overflow-hidden">
                    <div className="p-6 bg-gray-100 rounded-lg border border-gray-300 shadow-md mb-6">
                        <h2 className="text-2xl py-4 border-b-2 border-black font-bold mb-4">Student Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
                            <div className="flex items-center gap-2">
                                <div className="text-lg font-semibold">Student Name : </div>
                                <div className='text-lg'>{userDetails.name}</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-lg font-semibold mr-4">Status:</div>
                                <div>
                                    <span className={`px-3 py-1 rounded-lg text-lg ${userDetails.status === 'Pass' ? 'bg-green-500 text-white' : 'bg-red-600 text-white'}`}>
                                        {userDetails.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-lg font-semibold mr-4">Percentage:</div>
                                <span className={`px-3 py-1 rounded-lg text-md ${userDetails.status === 'Pass' ? 'bg-green-500 text-white' : 'bg-red-600 text-white'}`}>
                                    {userDetails.percentage.toFixed(2)}%
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-lg font-semibold mr-4">Standard:</div>
                                <div className='text-lg'>{userDetails.standard}</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-lg font-semibold mr-4">Roll No.:</div>
                                <div className='text-lg'>{userDetails.rollNumber}</div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300 mb-6">
                        <h2 className="text-2xl py-4 border-b-2 border-black font-bold mb-4">Subject-wise Marks</h2>

                        <table className="w-full w-72 border-collapse border border-gray-400">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-3 text-left font-bold text-gray-700 uppercase border border-gray-400">Subject</th>
                                    <th className="px-4 py-3 text-left font-bold text-gray-700 uppercase border border-gray-400">Marks</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {Object.entries(userDetails.marks).map(([subject, marks]) => (
                                    <tr key={subject}>
                                        <td className="px-6 py-4 whitespace-nowrap border border-gray-400">{subject}</td>
                                        <td className="px-6 py-4 whitespace-nowrap border border-gray-400">{marks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg border-t shadow-md border border-gray-300 mb-6">
                        <h3 className="text-xl py-4 border-b-2 border-black font-bold mb-2">Overall Performance</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-lg font-semibold">Total Marks Obtained:</p>
                                <p className = "text-lg">{userDetails.totalObtainedMarks}</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Total Marks:</p>
                                <p className = "text-lg">{userDetails.totalMarks}</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Percentage:</p>
                                <p className = "text-lg">{userDetails.percentage.toFixed(2)}%</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Status:</p>
                                <p className={`font-semibold text-lg ${userDetails.status === 'Pass' ? 'text-green-600' : 'text-red-600'}`}>{userDetails.status}</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Standard:</p>
                                <p className = "text-lg">{userDetails.standard}</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Roll No.:</p>
                                <p className = "text-lg">{userDetails.rollNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
};

export default SearchResultPage;
