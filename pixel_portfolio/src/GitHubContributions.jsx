import React, {useState, useEffect} from 'react';
import { Octokit } from '@octokit/rest';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([])
  useEffect(() => {
    const octokit = new Octokit();

    const fetchContributions = async () => {
      try {
        const response = await octokit.activity.listContributionsForAuthenticatedUser({
		username: 'gwynbleiddrivia'
	});
        const contributionsData = response.data;
        setContributions(contributionsData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchContributions();
  }, []);

  return (

    <div>
      {contributions.length > 0 ?
        <ul>
          {contributions.map((contribution) => (
            <li key={contribution.id}>{contribution}</li>
          ))}
        </ul>
       : 
        <div>Fetching GitHub Contributions...</div>
      }
    </div>


  );
};

export default GitHubContributions;
