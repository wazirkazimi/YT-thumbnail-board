# YouTube Thumbnail Board Web App  

## **The Idea and Purpose Behind It**  

This web app allows users to extract and download the thumbnail of any YouTube video by simply pasting the video link into an input field. The app retrieves the thumbnail using the video ID from the link and provides users with an option to download it.  

---

## **Basic Features**  

1. **Input Bar**: Users can paste the YouTube video link.  
2. **Download Option**: The app provides a button to download the retrieved thumbnail.  
3. **Dark Mode**: A toggle feature for better user experience in low-light environments.  

---

## **Technologies Used**  

1. **HTML**: For structuring the web app.  
2. **CSS**: To style the app and implement Dark Mode.  
3. **JavaScript**: For processing the YouTube link and retrieving the thumbnail.  

---

## **User Interface (UI)**  

The UI for this web app is designed on Figma, and you can view it here:  
[YouTube Thumbnail Board UI Design](https://www.figma.com/design/v7YvCRjjoWiIHqcXkZ6c4r/YT-Thumbnail-Board?m=auto&t=vsAKoZ8zebYuiFef-1)  

---

## **The Logic Behind This Project**  


### **Understanding Video IDs**  

Each YouTube video has a unique 11-character video ID. For example:  
[Read the notion file for better understanding.](https://www.notion.so/Thumbnail-Board-1491458b5ef48081b027d372219e30a0?pvs=4)

### **Implementation Steps**  

1. **Extracting the Video ID**:  
   The app uses JavaScript to extract the video ID from the pasted YouTube URL using the `substring()` method.  
   ```javascript
   const vid_id = inputValue.trim().substring(17, 28);
   console.log(vid_id);
  - trim() removes any unnecessary spaces from the input.
  - substring(17, 28) retrieves the portion of the URL where the video ID resides.
  - Creating the Thumbnail URL:
Once the video ID is extracted, it is inserted into the YouTube thumbnail URL pattern to generate the thumbnail image URL.

### **YouTube Thumbnail Retrieval Pattern**  

YouTube video thumbnails can be retrieved using a specific URL pattern:  
``https://img.youtube.com/vi/[video-id]/0.jpg

**How to Use
Clone the repository:

    ```bash
    git clone https://github.com/wazirkazimi/YT-thumbnail-board.git

 *1.Open the index.html file in your browser.

 2.Paste a YouTube video link in the input bar.

 3.Click the "Retrieve Thumbnail" button to fetch the thumbnail.

 4.Use the "Download Thumbnail" button to save the image.(This function does not work for now, but will be available soon)

### **Conclusion
The YouTube Thumbnail Board Web App is a simple and efficient tool to extract and download YouTube thumbnails. It showcases how JavaScript can be used to manipulate strings and URLs dynamically, providing a practical solution for users.

Feel free to fork the repository, contribute, or provide feedback!
