MusicBrain

Pre-Login
1. Login
2. Signup

Post-Login
1. News Feed
2. Profile
3. Announce
4. Search
5. Recommendations
    i. Personal - Content based recommendation model
    ii. Collaborative recommendation model
6. Settings

Description
1. Login
    i. Login using username 
    ii. Login using google

2. Signup

3. News feed
    i. Left side drawer
    ii. Plus button ()



Implementation
1. Create Account
    - get details from frontend and send a post request to the server.
    - server does an insert query to Authentication table by storing the username and hashed password.

    Note: Username has to be unique not null for each user.

2. Login
    - get details from frontend and send a post request to the server.
    - the server replies with auth or nauth. (Select query on Authentication table)

3. Posts
    - user opens the post page, which contains around 10 songs which he recently played on spotify.
    - a check box next to song allows the user to post the songs individually.
    - on posting a post request is sent to the server with the required details.
    - the server then performs a insert query to Posts table.

4. Likes
    -  an user can click the heart button next to the post to like the post.
    - upon liking the post a update query is performed to update the like count.


5. Comments
    - an user clicks the view comments to view/add a comment.
    - a query is performed on Comments table for that post id.
    - when user types something and click the send arrow, an insert query is performed.

    Note: Comments cannot be deleted.

6. Follow / Unfollow
    - search for people and click follow.
    - server performs an insert query to the Followers table.

    Note: Below in that page u will get suggestions on users who listen to similar songs as u.

7. Profile 
    - here u can view a users posts and (post, follower,following) count.
    - clicking on following and followers shows the list of users.

8. When will u get a Notification
    - the person u follow made a new post.
    - someone commented or liked ur post.
    - someone started following u.

* Notifications is tricky